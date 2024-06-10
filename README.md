https://res.cloudinary.com/dip3poftg/raw/upload/v1683002332/sample-book-data/books_m4bs2l.json --- book api

Field	Type	ControlId	Validation

1).First Name	text	firstName	
Validation Type	Validaton error
Required	FirstName cannot be blank.
minLength	FirstName should have at least 4 character
maxLength	FirstName should have at most 20 character
 

2). Last Name	text	lastName	
Validation Type	Validaton error
Required	LastName cannot be blank.
minLength	LastName should have at least 4 character
maxLength	LastName should have at most 20 character
 

3). Date of Birth	date	dateOfBirth	
Validation Type	Validaton error
Required	Select Date of Birth
Min Age	Age must be greater than 18
 

4) Gender	radio	male/ female	
Validation Type	Validaton error
Required	Select Gender
 

5) Choose Hobbies	checkbox	chess/ badminton/ hockey/ reading	
Validation Type	Validaton error
Required	Choose at least one hobbies
 

6) State	dropdown	stateDropdown	
Validation Type	Validaton error
Required	Choose State
 

7) City	dropdown	cityDropdown	
Validation Type	Validaton error
Required	Choose City
 
8) Area	dropdown	areaDropdown	
 
Validation Type	Validaton error
Required	Choose Area 

9) Salary	number	salary	

Validation Type	Validaton error
Required	Enter Salary
min	Min Salary Should be 10,000
max	Max Salary Should be 50,000
