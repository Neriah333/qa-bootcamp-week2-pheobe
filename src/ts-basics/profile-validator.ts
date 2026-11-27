type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};

const users: UserProfile[] = [
    {
        id: 1,
        username: "pheobe",
        settings: {
            notifications: true
        }
    },
    {
        id: 2,
        username: "john"
    },
    {
        id: 3,
        username: "mary",
        settings: {}
    },
    {
        id: 4,
        username: "peter",
        settings: {
            notifications: false
        }
    }
];

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

users.forEach(user => {
    console.log(`${user.username}:`, isNotified(user));
});
