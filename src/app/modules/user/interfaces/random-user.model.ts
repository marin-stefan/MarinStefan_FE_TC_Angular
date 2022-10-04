export interface RandomApiResponse{
    results: RandomUserModel [];
    info: {
        page: number;
        results: number;
        seed: string;
        version: string;
    };
}

export interface RandomUserModel {
    cell: string;
    dob: {
        age: number;
        date: string;
    };
    email: string;
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: RandomLocation;
    login: RandomLogin;
    name: {
        first: string; 
        last: string; 
        title: string;
    };
    nat: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        age: number;
        date: string;
    };
};

export interface RandomLogin{
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
};

export interface RandomLocation {
    city: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
    country: string;
    postcode: string;
    state: string;
    street: {
        name: string;
        number: number;
    };
    timezone: {
        description: string;
        offset: string;
    };
};