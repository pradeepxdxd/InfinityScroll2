import React from 'react'
import {fetchPeople} from '../../services/api'
import InfinityScroller from '../../components/InfinityScroll/InfinityScroller'
import PeopleTemplate from '../../components/Templates/PeopleTemplate'

export default function People() {
    return (
        <InfinityScroller api={fetchPeople} limit={5} Templete={PeopleTemplate} />
    )
}
