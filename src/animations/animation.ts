
export const SlideinAnimation = {
    initial: {
      opacity: 0,
      y: -100,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
      },
    },
  };

  export const textVariant = {
    initial: {
      opacity: 0,
      y: 20,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    final2: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.6,
      },
    },
    final3: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
    exit : {
      opacity: 0,
      y: 20,
      transition :{
        duration: 0.5,
      }
    }
  };

  export const AnimateHeroImg = {
    initial : {
      opacity : 0,
      x : -150
    },
    initial2 : {
      opacity : 0,
      x : 150
    },
    final : {
      opacity : 1,
      x : 0,
      transition :{
        duration: 0.75,
      }
    }
  }
  export const TACVariant = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit : {
      opacity: 0,
      transition :{
        duration: 0.6,
      }
    }
  }
  export const CandidateVariant = {
    initial : {
      opacity : 0,
      scale :0.75,
    },
    final : {
      opacity : 1,
      scale :1,
      transition :{
        duration: 0.75,
      }
    }
  }