import InfinityScroller from '../../components/InfinityScroll/InfinityScroller';
import {fetchApi} from '../../services/api'
import Posts from '../../components/Templates/Posts'

export default function Post() {
    return (
        <>
            <h1>Infinity Scroll bar</h1>
            <InfinityScroller api={fetchApi} limit={10} Templete={Posts} />
        </>
    )
}
