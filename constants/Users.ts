

export interface IUser{
    vin : string;
    firstName : string;
    lastName : string;
    state : string;
    lga : string;
}
export interface IShortUser{
    vin : string;
    password : string;
    hasVotedPresident : boolean;
}
export const UsersDb :IUser[] = [
    {vin : "2333892302112hsjdksdjksjhd", firstName : "Jude", lastName : "Okoye", state : "Enugu", lga : "Nkanu West"},
]