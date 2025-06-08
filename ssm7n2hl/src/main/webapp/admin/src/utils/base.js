const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm7n2hl/",
            name: "ssm7n2hl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm7n2hl/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "高校共享单车管理系统"
        } 
    }
}
export default base
