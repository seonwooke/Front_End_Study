export interface SUser {
    firstName: string;
    lastName: string;
    age: number;
    isValid: boolean;
}

export function getFullName(user: SUser) {
    return `${user.firstName} ${user.lastName}`;
}