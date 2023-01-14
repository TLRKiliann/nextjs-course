import { useRouter } from 'next/router'

export default function Parameters() {
	const router = useRouter()
	const {params = []} = router.query
    //console.log(params)
	if (params.length === 4) {
	    return (
            <h2>docs/params/ params[0&1]: {params[0]} {params[1]} params[2&3]: {params[2]} {params[3]}</h2>
        )
    } else if (params.length === 2) {
        return (
            <h3>Params is equal to 1 params[0&1] => {params[0]} {params[1]}</h3>
        )
    }
    return (
        <h2>Doc folder params !</h2>
	)
}