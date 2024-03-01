import axios from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
})

// class ApiJsonServer { 
//     baseUrl: string;
//     constructor(base: string) {
//         this.baseUrl = base
//     }
// }

// export default new ApiJsonServer()