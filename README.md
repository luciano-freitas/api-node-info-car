<h1>API to consult car with plate in Brazil</h1>
<hr>

<h2>Observation</h2>
<p>Not use default plate mercosul, only plate default old</p>

<br>

<h3>Create file .env</h3>
<p>
Copy information from .env.example
</p>

<br>

<h3>Run dependeces</h3>
```
npm install OR yarn install
```

<br>

<h3>Run project</h3>
```
npm run start OR yarn start
```

<br>

<h3>Request</h3>
```
http://localhost:3333/sinesp/ABC1234
```

<br>

<h3>Response</h3>
```
{
    "codigoRetorno":                         "0",
    "mensagemRetorno":                       "Sem erros.",
    "codigoSituacao":                        "0",
    "situacao":                              "Sem restrição",
    "modelo":                                "FIAT/UNO MILLE EP",
    "marca":                                 "FIAT/UNO MILLE EP",
    "cor":                                   "BRANCA",
    "ano":                                   "1996",
    "anoModelo":                             "1996",
    "placa":                                 "ABC1234",
    "data":                                  "02/08/2018 às 02:52:34",
    "uf":                                    "DF",
    "municipio":                             "BRASILIA",
    "chassi":                                "99092",
    "dataAtualizacaoCaracteristicasVeiculo": "13/04/2018",
    "dataAtualizacaoRouboFurto":             "01/08/2018",
    "dataAtualizacaoAlarme":                 "01/08/2018"
}
```
