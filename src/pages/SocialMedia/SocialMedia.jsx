import React from 'react'
import {fetchSocialMediaPost} from '../../services/api'
import InfinityScroller from '../../components/InfinityScroll/InfinityScroller'
import SocialMediaTemplate from '../../components/Templates/SocialMediaTemplate'

export default function SocialMedia() {
  return (
    <InfinityScroller api={fetchSocialMediaPost} limit={6} Templete={SocialMediaTemplate} />
  )
}
