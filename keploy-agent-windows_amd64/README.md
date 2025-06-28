[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?logo=github)](CODE_OF_CONDUCT.md)
[![Slack](.github/slack.svg)](https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA)

# Keploy
[Keploy](https://keploy.io) is a no-code testing platform that generates tests from API calls.


## Community support
We'd love to collaborate with you to make Keploy great. To get started:
* [Slack](https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA) - Discussions with the community and the team.
* [GitHub](https://github.com/keploy/keploy/issues) - For bug reports and feature requests.

## Local Setup

- Clone enterprise repository
    ```
        git clone https://github.com/keploy/enterprise.git
    ```
- Build the binary and move it
    ```
    go build -race -o keploy && mv ./keploy /usr/local/bin
    ```
- If your application is docker, build the keploy docker image
    ```
    docker image build --build-arg SERVER_URL=http://localhost:8081 -t ghcr.io/keploy/keploy:v2-dev .
    ```

- Use this prefix while running keploy if you are on linux
    ```
    sudo -E env PATH="$PATH" keploy
    ```
- By default the enterprise will connected to api-server running in your local environment.
<br>

- If you want to change it change the url in main.go file if you are application in non docker.
    ```
    	api_server_uri = "https://api.staging.keploy.io"
    ```
- If you are on docker use build args to change the url
    ```
    docker image build --build-arg SERVER_URL=https://api.staging.keploy.io -t ghcr.io/keploy/keploy:v2-dev .
    ```

## Staging Setup

- Run the installation script
    ```
        curl --silent -O -L https://keploy.io/ent/install.sh && source install.sh $keploy_staging_version
    ```

## Prod Setup

- Run the installation script
    ```
        curl --silent -O -L https://keploy.io/ent/install.sh && source install.sh
    ```

## How to do a staging release?

- Do a normal release with tag - v*.\*.*-rc\*  eg:(v2.4.5-rc4)


# Keploy Enterprise Features

## Auto Test Generation

### Prerequisite

1) OpenAPI Schema file(format json) for the application for which the tests are to be generated.

### Usage

1) Generate tests using the following command

```bash
keploy generate-tests -c "java -jar /Users/charankamarapu/Desktop/whatsNew/samples-java/target/springbootapp-0.0.1-SNAPSHOT.jar" -s "/Users/charankamarapu/Desktop/whatsNew/samples-java/schema.json"
```
generate-tests supports all the flags related to the record command and ```-s``` is the flag which provides the schema file path to the test generation service.

2) Generate tests with Parallelism using the following command

```bash
keploy generate-parallel --llm-api-version "2024-02-01" --llm-base-url "https://api.staging.keploy.io"
```
#### You can use --file for generating tests for specific file for ex:
```bash
keploy generate-parallel --llm-api-version "2024-02-01" --llm-base-url "https://api.staging.keploy.io" --file /home/dir/specific_file.go
```

#### You can use --file for generating tests for specific directory for ex:
```bash
keploy generate-parallel --llm-api-version "2024-02-01" --llm-base-url "https://api.staging.keploy.io" --dir /home/specific_dir/
```

## Keploy Deduplication

### De-Duplication for JAVA Applications

Deduplication works only on test mode there are no special instructions to record your tests.

1) Put the latest keploy-sdk in your pom.xml file

```xml
<dependency>
    <groupId>io.keploy</groupId>
    <artifactId>keploy-sdk</artifactId>
    <version>0.0.1-SNAPSHOT</version>
</dependency>
```

2) Add bean and import to your main class

```java
import io.keploy.servlet.KeployMiddleware;

@Import(KeployMiddleware.class)
public class SamplesJavaApplication {
    public static void main(String[] args) {
        SpringApplication.run(SamplesJavaApplication.class, args);
    }
}
```

3) `sudo -E enterprise-server dedup -c "java -javaagent:<path-to-your-JacocoAgent>=address=*,port=36320,destfile=jacoco-it.exec,output=tcpserver -jar target/springbootapp-0.0.1-SNAPSHOT.jar"  --delay 10`

4) `keploy dedup --rm "<test-set-name>"` to remove all the deduplication files


### De-Duplication for Node Applications


Deduplication works only on test mode there are no special instructions to record your tests.

1) `npm i @keploy/sdk -g nyc`

2) `require('@keploy/sdk/dist/v2/dedup/register')` on top of your server.js/app.js file

3) `sudo -E enterprise-server dedup -c "<your command to run node server>"  --delay 10`

4) (optional) `keploy dedup --rm "<test-set-name>"` to remove all the deduplication files

### De-Duplication for Python Applications

Deduplication works only on test mode there are no special instructions to record your tests.

1) `pip install keploy`

2) In your main app file add `from keploy import FastApiCoverageMiddleware` along with the other imports.

3) Add Keploy's middleware along with the other middlewares for your app`app.add_middleware(FastApiCoverageMiddleware)`

4) `sudo -E env PATH=$PATH keploy dedup -c "<command to run your Python app>" --delay <time required for your application to start>`

5) Run `keploy dedup --rm "<test-set-name>"` to delete the duplicate testcases.
