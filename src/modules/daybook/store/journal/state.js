// El state es reactivo

export default () => ({
    isLoading : true,
    entries : [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Nulla labore in in cillum ea. Est dolor tempor esse laboris aliqua ad officia consectetur et proident esse reprehenderit. Eu cillum voluptate nisi anim officia ullamco magna veniam.",
            picture: null
        },
        {
            id: new Date().getTime(),
            date: new Date().toDateString() + 1000,
            text: "Ullamco ad magna qui velit sint dolore aliquip dolore dolor consectetur aliquip. Aute dolor aliqua incididunt ullamco commodo elit ipsum consectetur commodo pariatur consequat ullamco ea. Duis nostrud magna veniam qui tempor non cupidatat ullamco in laborum ea do. Officia sint cupidatat aliqua nostrud non laboris aliquip ad ipsum.",
            picture: null
        },
        {
            id: new Date().getTime(),
            date: new Date().toDateString() + 2000,
            text: "Ea incididunt commodo anim voluptate culpa. Ullamco ullamco do velit do proident ea qui aute commodo. Ullamco voluptate elit nostrud pariatur. Deserunt consectetur non dolor et ex proident enim tempor enim elit nostrud. Ullamco id voluptate eiusmod et esse deserunt minim.",
            picture: null
        },
        {
            id: new Date().getTime(),
            date: new Date().toDateString() + 3000,
            text: "Aliquip ea reprehenderit sunt magna ipsum magna et veniam. Non magna fugiat mollit elit amet id cillum. Dolore aute enim enim in aute dolor laboris mollit dolore aute irure enim. Ipsum et pariatur laborum ex culpa excepteur esse ad duis ut exercitation reprehenderit ut. Dolor eiusmod sint culpa consequat eiusmod pariatur est.",
            picture: null
        }
    ]
})