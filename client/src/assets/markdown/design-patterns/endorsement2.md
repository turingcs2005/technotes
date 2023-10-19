Your job as a developer is to save policy data to a database for consumption by a data engineer or a data scientist. 

## 1 Key fields

- Policy number: primary key of a policy. A policy can renew and span multiple terms.
- Policy module: a sequence starting with '00' when a new policy is issued, and is incremented by 1 at each policy renewal. For example, policy mod = '02' suggests that the current policy term is the second renewal.
- Policy effective date: the field name is self-explanatory.
- Endorsement effective date: also self-explanatory.

## 2 Data entry

- For each new/renewal/endorsement effective date, a new policy record should be saved to database.
- A policy record should save all policy information plus complete hierarchic information. For example, policy-level data fields, location-level data fields, building-level data fields, etc.
- Policy number + policy effective date + endorsement effective date should be sufficient to trace a policy's history.
- You may also create a separate policy primary key in a data table.

## 3 Edit/delete operations on data entry

- You should disable edit/delete on a data entry unless it is the latest.
- Editting a data entry that is not the latest will cause problems. For example, if you bypass endorsement 2 and add a car directly to endorsement 1, endorsement 2 will not have the new car under its coverage.

## 4 Power BI dashboard

- A Power BI dashboard will require a policy number.
- A policy number can be passed to a Power BI URL.
- A Power BI dashboard can be embedded in an Angular app using SafePipe. Feel free to reach out to Rui, Sol or Ryan regarding embedding a Power BI dashbaord.