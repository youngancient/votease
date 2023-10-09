

interface ICandidate{
    picture : string;
    name : string;
    party : string;
    partyLogo : string;
    isSelected : boolean;
}


export const CandidatesData:ICandidate[] =[
    {picture : "/assets/bulaba.jpg", name :"Bola Ahmed Tinubu", party : "APC", partyLogo : "/assets/apc.png", isSelected : false},
    {picture : "/assets/obedient.webp", name :"Peter Gregory Obi", party : "LP", partyLogo : "/assets/ellup.png", isSelected : false},
    {picture : "/assets/atiku.jpg", name :"Atiku Abubakar", party : "PDP", partyLogo : "/assets/pdp.png", isSelected : false},
    {picture : "/assets/sowore.jpg", name :"Omoleye Sowore", party : "AAC", partyLogo : "/assets/aac.png", isSelected : false},
    {picture : "/assets/kwankwaso.jpeg", name :"Rabiu Kwankwaso", party : "NNPP", partyLogo : "/assets/nnpp.jpg", isSelected : false},
]