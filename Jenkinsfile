pipeline {
  agent {
    docker {
      image 'cypress/browsers:22.15.0'
      reuseNode true
    }
  }

  parameters {
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'electron', 'firefox'], defaultValue: 'electron', description: 'Browser para rodar nos testes')
    string(name: 'CUCUMBER_TAG', defaultValue: '@regressivo', description: 'Tags do Cucumber. Ex: @regressivo or @smoke')
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
        echo "Executando testes: BROWSER: ${params.BROWSER} e CUCUMBER_TAG: ${params.CUCUMBER_TAG}"
        sh "npx cypress run --browser ${params.BROWSER} --env tags=${params.CUCUMBER_TAG}"
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*, allure-results/**/*', allowEmptyArchive: true
    }
  }
}