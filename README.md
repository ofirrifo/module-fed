# Angular Module Federation
This project build from 3 angular projects
- shell - the host project
- remote-a the remote peoject which will host in the shell project
- mf-lib angular lib which will use for communication between the above projects. shell <==> remote-a


## Clone Repo
```sh
git clone https://github.com/ofirrifo/module-fed.git
```

## Install Dependencies
- From the root of the project run this command:
```sh
npm i
```
This will install all projects dependencies

## Execute Projects
- From the root of the project run this command:
```sh
npm run all:start
```
This will serve both shell and remote-a projects