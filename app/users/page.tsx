interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store'
    });
    // {
    //     cache: 'no-store',
    //     next: {
    //         revalidate: 10
    //     }
    // }

    const users: User[] = await res.json();

    const renderUsers = users.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        );
    });

    return (
        <>
            <div>Users Page</div>
            {/* <p>{new Date().toLocaleTimeString()}</p> */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers}
                </tbody>
            </table>
        </>
    );
};

export default UsersPage;