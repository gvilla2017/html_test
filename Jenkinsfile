CODE_CHANGES =getGitChanges()

pipeline {

	agent any
	tools {
		maven
	}
	environment {
		NEW_VERSION = '1.3.0'
		SERVER_CREDENTIALS = credentials('server_cdredentials')
	}

	stages {

		stage("build") {
			when {
				expression {
					BRANCH_NAME == 'dev' &&CODE_CHANGES == true
				}

			steps {
				echo "building version ${NEW_VERSION}"
				echo 'building the application ...'
				}
		}
		stage("test") {
			when {
				expression {
					BRANCH_NAME == 'dev' || BRANCH_NAME == 'master'
				}
			steps {
				echo 'building testing the Application ...'

				}
		}
		stage("deploy") {

			steps {
				echo 'building deploying the Application ...'
				echo "deploying credential ${SERVER_CREDENTIALS}"
				sh "echo hello there"
				}
		}
	}
	post {
		always {
		}
		success {
		}
		failure {
		}
}

node {
	// groovy script

}
