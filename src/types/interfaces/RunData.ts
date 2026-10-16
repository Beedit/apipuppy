export default interface RunData {
    data: {
        place: number
        run: {
            weblink: string
            times: {
                primary_t: number
            }
            submitted: string
        }
        category: {
            data: {
                name: string
            }
        }
    }[]
}
