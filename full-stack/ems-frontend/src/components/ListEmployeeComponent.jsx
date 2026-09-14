const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      emailId: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      emailId: "jane.smith@example.com",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      emailId: "michael.johnson@example.com",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
