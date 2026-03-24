pipeline {
  agent {
    docker {
      image 'cypress/browsers:22.15.0'
      reuseNode true
    }
  }

  parameters {
    string(name: 'CUCUMBER_TAG', defaultValue: '@regressivo', description: 'Tags do Cucumber. Ex: @Regressivo or @Smoke')
  }

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    CI = 'true'
    NO_COLOR = '1'
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
        sh 'npx cypress run --browser electron --env tags="${CUCUMBER_TAG}"'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*, allure-results/**/*', allowEmptyArchive: true
    }
  }
}