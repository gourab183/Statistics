import React, { useState, useEffect } from 'react';
import { column } from '../components/common/column';
import Tabular from '../components/Tabular';
import { fetchStats } from '../components/action/statsAction';
import { connect } from 'react-redux';
import { LineChart } from 'react-chartkick'
import 'chart.js'

const Home = (props) => {
    const [data, setData] = useState(props.stats);
    const [pageNo, setPageNo] = useState(1);
    const [nbPage, setTotalPage] = useState(1);
    const [chartData, setchartData] = useState({});
    const [clickUpvoteCount, setClickUpvoteCount] = useState(0);

    function handleUpVote(id) {
        const newStats = data.map((value, index) => {
            if (value.objectID === id) {
                return Object.assign({}, value, {
                    points: value.points + 1
                })
            } else {
                return value;
            }
        });
        localStorage.setItem(`stats-${pageNo}`, JSON.stringify(newStats));
        setData(newStats);
        setClickUpvoteCount(clickUpvoteCount + 1);
    }

    useEffect(() => {
        const chartValue = {};
        if (localStorage.getItem(`stats-${pageNo}`) === null) {
            props.fetchStats(pageNo).then((response) => {
                localStorage.setItem(`stats-${response.page}`, JSON.stringify(response.data));
                localStorage.setItem(`total-stats-page`, JSON.stringify(response.nbPage));
                response.data.forEach((val, index) => {
                    chartValue[' ' + val.num_comments] = val.points
                });
                setchartData(chartValue);
                setData(response.data);
                setTotalPage(response.nbPage);
            });
        } else {
            const dataFromCache = JSON.parse(localStorage.getItem(`stats-${pageNo}`));
            setData(dataFromCache);
            dataFromCache.forEach((val, index) => {
                chartValue[' ' + val.num_comments] = val.points
            });
            setchartData(chartValue);
            setTotalPage(JSON.parse(localStorage.getItem(`total-stats-page`)));
        }
    }, [pageNo, clickUpvoteCount]);

    function handlePrev() {
        setPageNo(pageNo - 1);
    }

    function handleNext() {
        setPageNo(pageNo + 1);
    }

    function handleHide(id) {
        const newStats = data.filter((value, index) => {
            if (value.objectID != id) {
                return true;
            } else {
                return false;
            }
        });
        localStorage.setItem(`stats-${pageNo}`, JSON.stringify(newStats));
        setData(newStats);
        setClickUpvoteCount(clickUpvoteCount + 1);
    }

    return (
        <div>
            <Tabular data={data}
                columns={column}
                handleUpVote={handleUpVote}
                handleNext={handleNext}
                handlePrev={handlePrev}
                handleHide={handleHide}
                pageNo={pageNo}
                nbPage={nbPage}
            />
            <LineChart
                data={chartData}
                curve={false}
                xtitle="ID"
                ytitle="Votes" />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stats: state.stats
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStats: (params) => dispatch(fetchStats(params))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
export { Home };

