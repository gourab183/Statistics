export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html  manifest="example.appcache">
    <head>
      <title>${title}</title>
          <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <!-- Bootstrap CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
      <div id="root">${body}</div>
    </body>

    <script src="/assets/bundle.js"></script>
  </html>
`);
