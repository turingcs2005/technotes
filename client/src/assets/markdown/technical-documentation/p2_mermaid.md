# Mermaid for charting

A picture tells a thousand words. Here is an example:

1. User selects an available room on the front end, which then sends time interval(s) and room number to the back end.
2. The back end execute a query against the MongoDB database to make sure that the room is available.
3. Database query confirms that the room is available and informs the back end.
4. The back end inserts new reservation(s) to the MongoDB database.
5. The front end routes to reservation list
6. The change is promulgated to all clients. If a client is on the the reservation inquiry page, the list of available rooms will update in real time.
  
```mermaid
flowchart LR
classDef database color: white, fill: darkred
classDef backend color: white, fill: darkgreen
classDef frontend color: white, fill: navy

Angular((front end)):::frontend --> |1 select a room| NodeJS((Back End)):::backend
NodeJS --> |2 check availability| MongoDB[(MongoDB)]:::database
MongoDB --> |3 room is available| NodeJS
NodeJS --> |4 create reservation| MongoDB
NodeJS --> |5 routes to reservation list| Angular
NodeJS --> |6 promulgate reservation change| AllClients((all clients)):::frontend

linkStyle 0 stroke-width:2px,fill:none,stroke:navy;
linkStyle 1 stroke-width:2px,fill:none,stroke:darkgreen;
linkStyle 2 stroke-width:2px,fill:none,stroke:darkred;
linkStyle 3 stroke-width:2px,fill:none,stroke:darkgreen;
linkStyle 4 stroke-width:2px,fill:none,stroke:darkgreen;
linkStyle 5 stroke-width:2px,fill:none,stroke:navy;
linkStyle default stroke-width:2px,fill:none,stroke:red;
```

Markdown code

<pre><code>
```mermaid
flowchart LR
classDef database color: white, fill: darkred
classDef backend color: white, fill: darkgreen
classDef frontend color: white, fill: navy

Angular((front end)):::frontend --> |1 select a room| NodeJS((Back End)):::backend
NodeJS --> |2 check availability| MongoDB[(MongoDB)]:::database
MongoDB --> |3 room is available| NodeJS
NodeJS --> |4 create reservation| MongoDB
NodeJS --> |5 routes to reservation list| Angular
NodeJS --> |6 promulgate reservation change| AllClients((all clients)):::frontend

linkStyle 0 stroke-width:2px,fill:none,stroke:navy;
linkStyle 1 stroke-width:2px,fill:none,stroke:darkgreen;
linkStyle 2 stroke-width:2px,fill:none,stroke:darkred;
linkStyle 3 stroke-width:2px,fill:none,stroke:darkgreen;
linkStyle 4 stroke-width:2px,fill:none,stroke:darkgreen;
linkStyle 5 stroke-width:2px,fill:none,stroke:navy;
linkStyle default stroke-width:2px,fill:none,stroke:red;
```
</code></pre>