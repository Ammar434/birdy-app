import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Actualite = () => {
    return (
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="TwitterDev"
            options={{height: 600}}
        />
    )
}

export default Actualite;
