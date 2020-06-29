pipeline {
     agent any
    
  tools {nodejs "NodeJS"}
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
                    steps {
                        sh 'npm run test'
                    }
                }

    }
}