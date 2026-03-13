pipeline {
  agent {
    docker {
      image 'cypress/browsers:22.15.0'
      reuseNode true
    }
  }

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm ci'
      }
    }

    stage('Run Cypress') {
      steps {
        sh 'npx cypress run --browser electron'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*, allure-results/**/*', allowEmptyArchive: true

      allure([
        includeProperties: false,
        jdk: '',
        results: [[path: 'allure-results']]
      ])
    }
  }
}