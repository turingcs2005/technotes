# Projects

1. Property Workbook
2. Workers Compensation Workbook
3. Commercial Auto Workbook
4. Auditing Tool for Operations
5. FACT (File Analysis and Coaching Tool)
6. FAC (Facultative Reinsurance Spreaders)
7. COP (Commercial Output Policies)
8. Lobster Boat Rater
9. Sprinkler Tool
10. Marinas Rater
11. International Rating Platform
12. Office Reservation App
13. Document Builder
14. Marine RAPP

```mermaid
flowchart LR
classDef completed color: white, fill: darkgreen, text-align: left
classDef people fill: yellow, text-align: left

	subgraph Support1
	James(James):::people --> AuditingToolOperations(Audting Tool - Ops):::completed
	Jeff(Jeff):::people --> AuditingToolOperations(Auditing Tool - Ops)
	James(James) --> FAC(FAC):::completed
	Rui(Rui):::people --> FAC(FAC):::completed
	Rui --> OfficeSpaceReservationTool(Office Reservation):::completed
	Jake(Jake):::people --> FACT(FACT Tool):::completed
	Matt(Matt):::people --> FACT
	Sol(Sol):::people --> PropertyWorkbook(Property Workbook):::completed

	end
```

```mermaid

flowchart LR
	subgraph Support2
	classDef completed color: white, fill: darkgreen, text-align: left
	classDef people fill: yellow, text-align: left
	Ryan(Ryan):::people --> LobsterBoat(Lobster Boat):::completed
	Ryan(Ryan) --> SprinklerTool(Sprinkler Tool):::completed
	Kelsey(Kelsey):::people --> AutoWorkbook(Auto Workbook):::completed
	Kelsey(Kelsey) --> CompWorkbook(Comp Workbook):::completed
	Kelsey(Kelsey) --> COP(COP):::completed
	Sol(Sol):::people --> PWB_Enhancement(PWB PACE Enhancement):::completed
	Matt(Matt):::people --> PWB_Enhancement
	Kelsey(Kelsey) --> PWB_Enhancement
	end
```

```mermaid
flowchart LR
	subgraph Development
	classDef completed color: white, fill: darkgreen, text-align: left
	classDef inprogress color: navy, fill: lightgreen, text-align: left
	classDef people fill: yellow, text-align: left

	Rui(Rui):::people --> DocumentBuilder(Document Builder):::inprogress
	Kelsey(Kelsey):::people --> MarinasRater(Marinas Rater):::inprogress
	Sarah(Sarah):::people --> MarinasRater
	Jake(Jake):::people --> InternationalRater(International Rater):::inprogress
	Jeff(Jeff):::people --> InternationalRater
	Kelsey --> InternationalRater
	Matt(Matt):::people --> InternationalRater
	end
```
