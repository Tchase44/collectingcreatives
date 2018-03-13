import { Videos } from './videos.model';

const videos = [];

function makeDummyVids(){ 
    for (let i = 0; i < 5; i++) {
        videos.push(new Videos(`video:${i}`, `description Number ${i}`, `https://${i}.com`));
    }
};
makeDummyVids()
export const VIDEOS: Videos[] = videos;
