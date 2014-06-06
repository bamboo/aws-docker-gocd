# the following environment variables must be set in gocd
# S3_BUCKET
# AWS_REGION
# APP_NAME
# APP_ENV

VERSION=$GO_PIPELINE_LABEL
S3_KEY=$APP_NAME/$VERSION.zip

aws s3 cp app.zip s3://$S3_BUCKET/$S3_KEY --region $AWS_REGION
aws elasticbeanstalk create-application-version --application-name $APP_NAME --version-label $VERSION --source-bundle S3Bucket=$S3_BUCKET,S3Key=$S3_KEY --region $AWS_REGION
aws elasticbeanstalk update-environment --environment-name $APP_ENV --version-label $VERSION --region $AWS_REGION
