## Addtional features and functionalities

- Oracle database access with Node.js back end (James Wolverson)
- File upload and download (Rui Wang)
- PDF document production 
  - Front end solution (Ryan D'entremont; Kelsey Rustin)
  - Back end solution (Lindsey Fletcher; Sarah Tran)
- Email with Power Apps (Jake Price)
- Apache Tomcat/Spring Boot (Ryan D'entremont; Kelsey Rustin)
- AI enabled software

```mermaid
flowchart TB

subgraph JAVA + React + SQL

	Apache(((Tomcat))) <--> React{React}
	style Apache color: white, fill: darkred
	style React color: white, fill: darkgreen

end

subgraph MEAN + SQL

	MSSQL[(MS SQL)] <--> backend(((Node.js)))
	MongoDB[(MongoDB)] <--> backend
	Oracle[(Oracle)] <--> backend
	backend <--> frontend{Angular}
	Emails(Emails) <--> MSSQL
	frontend <--> PDF_front(PDF: front end)
	PowerBI(Power BI) --> frontend
	backend <--> PDF_backend(PDF: back end)
	frontend <--> file_upload(file upload)
	backend <-.-> AI(AI functions)

  style backend color: white, fill: darkred
	style frontend color: white, fill: darkgreen
	style MSSQL color: white, fill: tan
	style MongoDB color: white, fill: tan
	style Oracle color: white, fill: navy
	style Emails color: white, fill: navy
	style PDF_front color: white, fill: navy
	style PDF_backend color: white, fill: navy
	style file_upload color: white, fill: navy
	style AI color: white, fill: purple
	style PowerBI color: white, fill: navy
end

```