<template>
  <div class="mover-container">
    <div
      class="mover-base"
      v-for="a in a"
    >
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a: [...new Array(99).fill(1)]
    };
  }
};
</script>

<style lang="scss">

.mover-container {
  .mover-base {
    position: absolute;
    width: 30px;
    height: 30px;
    
    z-index: -1;

    > div {
      width: 100%;
      height: 100%;
      background-color: #BBB;
    }
    
    @for $j from 0 to 10 {
      @for $i from 0 to 10 {
        $idx: $j*10 + $i;
        $dist: $i + $j;

        &:nth-of-type(#{$idx}) {
          top: random(9) * 1% + $j * 11% - 4%;
          left: random(9) * 1% + $i * 11% - 4%;
          transform: scale(random(10) + 5);
          transition: all 0.3s;
          transition-delay: #{$dist/9 * 0.5s};

          > div {
            $start-rot: random(360) * 1deg;
            transform: $start-rot;
            transition: all 0.3s;
            transition-delay: #{$dist/9 * 0.5s};
            background-color: darken(#CCC, $dist * 1%);
            animation-name: idle-rotate-#{$i}-#{$j};
            animation-duration: random(500) * 1s + 300s;
            animation-iteration-count: infinite;
            animation-delay: 0.3s;
            //animation-direction: ;

            @keyframes idle-rotate-#{$i}-#{$j} {
              0% {
                transform: rotate($start-rot);
              }
              100% {
                transform: rotate($start-rot + 360deg);
              }
            }
          }
        }
      }

      @media (prefers-reduced-motion) {
        transition-property: none;

        > div {
          transition-property: none;
          animation-name: none;
        }
      }
    }
  }

  &.bgHighlight {
    .mover-base {
      @for $j from 0 to 20 {
        @for $i from 0 to 10 {
          $idx: $j*10 + $i;
          $dist: $i + $j;

          &:nth-of-type(#{$idx}) {
            > div {
              background-color: darken(#cfccda, $dist * 1%);
            }
          }
        }
      }
    }
  }

  // This would be really cool if we can get it to work, but there's no easy way
  // to animate between the idle animation and transition to this, so it looks like
  // shit...
  // &.bgModulate {
  //   .mover-base {
  //     @for $j from 0 to 20 {
  //       @for $i from 0 to 10 {
  //         $idx: $j*10 + $i;
  //         $dist: $i + $j;

  //         &:nth-of-type(#{$idx}) {
  //           > div {
  //             animation-name: none;
  //             transform: rotate(0);
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>