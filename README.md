# AWS SAM Demos

## Description
This repo is a collection of simple demos using the [AWS Serverless Application Model](https://github.com/awslabs/serverless-application-model) framework.

## Testing
You can use the [aws-sam-local](https://github.com/awslabs/aws-sam-local) program to be able to locally test your functions. Here are some useful commands to help with that:
```
# Validate syntax of the template file 
sam validate <name-of-template-file>

# Run function/API locally to test
sam local start-api

# Generate sample Lambda events. These can be used to test Lambda invocation.
sam local generate-event s3|sns|kinesis|dynamodb|api|schedule >> event.json

```

## Examples
Currently there are only a few examples:
- simple hello world
- multiple handler products example

## LICENSE
MIT
