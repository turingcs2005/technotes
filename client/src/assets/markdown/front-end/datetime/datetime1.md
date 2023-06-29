<style>
	table, th, td {
		border: 1px solid black;
		text-align: left;
	}

	table {
		border-collapse: collapse;;
	}

	.darkgreen {
		color: darkgreen;
	}

	th, td {
		padding: 10px;
		width: 80px;
	}

	.navy {
		background-color: navy;
		color: white;
		font-weight: bold;
	}

	.purple {
		color: purple;
	}

	.darkred {
		background-color: darkred;
		color: white;
		font-weight: bold;
	}

	.link {
		cursor: pointer;
		text-decoration: none;
		font-weight: bold;
	}
</style>


## 1. JavaScript Date
A JavaScript Date object represents a single moment in time measured as milliseconds since the epoch, or midnight of 01/01/1970, UTC time. It is obvious that a JavaScripte Date lives in a one-dimensional Euclidean space, where any moment in time can be represented by an integer. You can get that [integer](## "A computer is a finite-state machine and cannot represent time with infinite granularity&mdash;hence the millisecond/integer representation instead of real number.") by calling getTime() method on a Date object.
___

## 2. Calendar Date
To a human, however, things are more complicated. There are several concepts: 
- year: any integer
- month: {0, 1, 2, ..., 11} (JavaScript month starts with 0)
- day: {1, 2, 3, ... 31}
- hour: {0, 1, 2, ... 23}
- minute: {0, 1, 2, ..., 59}
- second: {0, 1, 2, ..., 59}
- millisecond: {0, 1, 2, ..., 999}
- time zone offset: {-720, -660, -600, ..., +840} (time zones span -12&ndash;+14 in hours, and hence -720&ndash;+840 in minutes)
To determine a unique moment in time, we need all 8 elements above. 

Hence we have 2 systems representing time:
- Computer 💻 time: a one-dimensional Euclidean space where a moment in time is represented as an integer.
- Calendar 📆 time: an eight-dimensional space where a moment in time is represented as an 8-tuple.
___

## 3. Computer Date&rarr;Calendar Date mapping: 1&rarr;38
Mapping between a computer time (integer) and a calendar time (8-tuple) is [1-to-38](https://www.timeanddate.com/time/current-number-time-zones.html#:~:text=Currently%2038%20Different%20Local%20Times%20in%20Use), as there are [38 different time zones🌍](## "Several island nations created addtional time zones to accommodate their own needs, and hence we have 38 time zones instead of 24. There is also daylight saving to make things even more confusing, but let's ignore that.").

Here is a mapping example: moment 1687897914083 💻 (milliseconds since the epoch) is mapped to 2 of the 38 time zones:
- ET 💻 ( Eastern Time 🇺🇸)
- CST (China Standard Time)

<table>
	<tr>
		<th style="width:120px">Time</th>
		<th>Integer</th>
		<th>Year</td>
		<th>Month</td>
		<th>Day</th>
		<th>Hour</th>
		<th>Minute</th>
		<th>Second</th>
		<th>Millisecond</th>
		<th>Offset</th>
	</tr>
	<tr>
		<td>💻</td>
		<td>1687897914083</td>
		<td colspan="8"></td>
	</tr>
	<tr>
		<td>🌎 ET</td>
		<td></td>
		<td>2023</td>
		<td>6</td>
		<td class="navy">27</td>
		<td class="navy">16</td>
		<td>31</td>
		<td>54</td>
		<td>83</td>
		<td class="navy">240</td>
	</tr>
	<tr>
		<td>🌏 CST</td>
		<td></td>
		<td>2023</td>
		<td>6</td>
		<td class="darkred">28</td>
		<td class="darkred">4</td>
		<td>31</td>
		<td>54</td>
		<td>83</td>
		<td class="darkred">-480</td>
	</tr>
</table>

___

## 4. JavaScript gets timezone from your computer
If a JavaScripte Date maps to 38 different calendar times, how does a computer display a single calendar date based on a JavaScripte Date object? The answer: it uses your computer's time zone. As shown by the table in section 3, computer time 1687897914083 is displayed as 4:31PM, 06/27/2023 if you are in Boston, but 4:31AM, 06/28/2023 if you are in Beijing. 

What are the implications for our apps? Let's take a look at a real-life example.<br>
Marty, an underwriter based in Maine, U.S., underwrites lobster boat policies. Consider the following scenarios:
- It is 9:00AM, 06/27/2023. Marty is working from her Maine home. She creates policy A with effective date 08/01/2023 using our Lobster Boat Rater app.
- Two hours later at 11:00AM, Marty creates policy B with effective date 08/01/2023.
- Then she flies to California (PT) which is 3 hours behind Maine (ET). She creates policy C with effective date 08/01/2023.
What are the effective dates for policies A, B and C?
<table>
	<tr>
		<th>Policy</th>
		<th>Year</th>
		<th>Month</th>
		<th>Day</th>
		<th>Hour</th>
		<th>Minute</th>
		<th>Offset</th>
	</tr>
	<tr>
		<td>A</td>
		<td>2023</td>
		<td>8</td>
		<td>1</td>
		<td>0</td>
		<td>0</td>
		<td class="navy">240</td>
	</tr>
	<tr>
		<td>B</td>
		<td>2023</td>
		<td>8</td>
		<td>1</td>
		<td>0</td>
		<td>0</td>
		<td class="navy">240</td>
	</tr>
	<tr>
		<td>C</td>
		<td>2023</td>
		<td>8</td>
		<td>1</td>
		<td>0</td>
		<td>0</td>
		<td class="darkred">420</td>
	</tr>
<table>
You can see that while policy effective dates for policy A and policy B are the same, it is 3 hours later for policy C due to Marty being in a different time zone (her browser's time zone is used while saving a date object to database).

