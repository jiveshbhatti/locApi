
# LOC Assesment 

A basic project includes the front end that connects to an api which further is consuming Etherscan.io's api to check the token balance.




## API Reference

#### Get Token balance:

```http
  GET /api/v0/<contractaddress>/<address>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `contractaddress` | `string` | **Required** the contract address of the ERC-20 token.
 `address` | `string` | **Required** the string representing the address to check for token balance.
 


## Deployment

Project currently set in NODE_ENV variable as 'development' ; Change env var to 'production' when finalized. 

```bash
 NODE_ENV = production
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`
`NODE_ENV`
`PORT` 
`ETHER_URL` 
`ETHER_API` 




## Demo

`Front End:` 
https://loc-api.vercel.app/

`Api Call:`
https://locapi.herokuapp.com/api/v0/0xdac17f958d2ee523a2206206994597c13d831ec7/0xb415daaf22a53bfa51599a931e1d8cc593e3700f


## Screenshots

![App Screenshot](https://i.imgur.com/DJFiUKL.png)

![App Screenshot](https://i.imgur.com/GWmI2u3.png)

![App Screenshot](https://i.imgur.com/fS4lIq6.png)

## Tech Stack

**Client:** HTML, CSS, Javascript, Bootstrap

**Server:** Node, Express, Axios, Express-async-handler

## Documentation

[Documentation](https://linktodocumentation)

## Authors

- [@jiveshbhatti](https://github.com/jiveshbhatti)

