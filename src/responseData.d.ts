declare namespace responseResult {
    interface Movie {
        post: string;
        name: string;
        img: string;
    }

    interface DataLists {
        [date: string]: Movie[];
    }

    type isLogin = boolean
    type login = boolean
    type logout = boolean
    type getData = boolean
    type showData = DataLists | boolean
}