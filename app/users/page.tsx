interface User {
    id: number;
    name: string;
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
            <li key={user.id}>{user.name}</li>
        );
    });

    return (
        <>
            <div>Users Page</div>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {renderUsers}
            </ul>
        </>
    );
};

export default UsersPage;