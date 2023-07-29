import InfinityScroller from '../../components/InfinityScroll/InfinityScroller';
import {fetchApi} from '../../services/api'

export default function Post() {
    return (
        <>
            <h1>Infinity Scroll bar</h1>
            <InfinityScroller api={fetchApi} limit={10}  />
        </>
    )
}
