import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = (qtd: number) =>  {
    let data = []
    
    for (let i = 0; i < qtd; i++) {
        data.push(<Skeleton key={i} width={"217.562px"} height={"285px"} borderRadius={"8px"} />)
    }

    return data
}

export default SkeletonCard