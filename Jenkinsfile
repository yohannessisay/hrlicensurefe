def label
if (env.BRANCH_NAME == "moh") {
    port = "1236"
    name = "hrl-fe-moh"
}

  node('master') {

    checkout scm

    stage ('Build Image')
        {
            sh "docker build -t ${name}:${BUILD_NUMBER} . "
        }

    stage ('Remove old container')
        {
            sh "docker stop ${name} || true && docker rm ${name} || true"
        }
    stage ('Run Current Build')
        {
            sh "docker run -d --restart=always -p ${port}:80 --name ${name} ${name}:${BUILD_NUMBER}"
        }
}