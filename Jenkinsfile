pipeline {
  agent any
  stages {
    stage('Install') {
      parallel {
        stage('Install') {
          steps {
            sh 'npm install'
          }
        }
        stage('Test') {
          steps {
            sh 'ng test'
          }
        }
      }
    }
  }
}