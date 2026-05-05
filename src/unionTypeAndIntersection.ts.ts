type UserRole = 'admin' | 'user' | 'guest';

const getDashboard = (role: UserRole) => {
    if(role === "admin") {
        return 'Admin Dashboard';
    }
    else if (role === 'user') {
        return 'user Dashboard';

    }
    else {
        return 'guest Dashboard'
    }
}

getDashboard ('guest')

///intersection ------------

type Employee = {
    id: number | string,
    name: string,
    phone: string | number,
}

 type Manager = {
    designation : string;
    teamsize: number;
 }

 type EmployeeManager = Employee & Manager


 const ChowdhurySaheb : EmployeeManager = {
    name: "chomok",
    phone: 123546,
    designation: 'eng',
    teamsize: 321,
    id:21
 }
 console.log(ChowdhurySaheb);