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

## 5 Endorsement changes

- Premium changes can be easily traced. They are usually at the policy or coverage level.
- Endorsement changes are difficult to identify.
  - An endorsement can add/remove a car (exposure change), add/remove a coverage such as collision (coverage change), etc. 
  - A single endorsement effective date may involve multiple endorsement changes (e.g. effective 6/1/2023, a new car is added, but collision coverage is removed from all cars, etc.).
  - To trace these changes, you need to traverse the whole tree-structure of a policy.
  - In light of the computational cost, it is advisable to add an endorsement note field to each endorsement, so changes can be traced easily. (e.g. "A 3rd car is added to policy; collision coverage is removed from all cars".)
  - Such endorsement notes can be consumed by a Power BI dashboard.
  