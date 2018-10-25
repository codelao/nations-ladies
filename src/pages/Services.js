import React, { Component } from 'react';
import PublicPageHeading from '../components/PublicPageHeading';
import PublicPageMainText from '../components/PublicPageMainText'

export default class Services extends Component{
render(){
	let Heading = 'Service';
	let Text = 'bla bla bla bla bla bla bla'
    let MainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ultricies mi tempus consequat. Aliquam tincidunt velit ac lobortis euismod. Nam pulvinar sit amet sapien at porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elementum volutpat imperdiet. Nullam eget rutrum nisi. Nulla sit amet elementum felis. Vestibulum at ex nec leo vulputate aliquam. Aliquam pretium tellus a egestas pulvinar. Maecenas tincidunt lacus at leo dictum, vitae sollicitudin erat ullamcorper. Proin congue tellus nisl, lobortis pellentesque nisi laoreet ut. Praesent sit amet enim fringilla, volutpat risus nec, consectetur eros. Donec viverra suscipit blandit. Morbi vitae finibus libero. Aenean euismod volutpat sollicitudin. Vestibulum imperdiet pharetra enim vel condimentum. Nam mollis elementum suscipit. Morbi purus odio, cursus maximus bibendum et, elementum sit amet lectus. Nunc malesuada lorem odio, a ullamcorper odio ultricies id. Duis ut augue tempus, lobortis libero nec, consectetur eros. Maecenas eu est in urna lacinia interdum. Nullam in euismod urna, sit amet efficitur justo. Praesent laoreet eros at nisl tincidunt ultrices. Nam a arcu bibendum, blandit nibh vitae, ullamcorper velit. Praesent eros ipsum, elementum faucibus finibus eget, porttitor sed purus. Duis sit amet metus est. Vestibulum sit amet arcu semper, commodo leo a, tempor ex. Etiam commodo laoreet efficitur. Morbi bibendum elit in rhoncus efficitur. Aenean at ex feugiat, porta ante vitae, tincidunt neque. Proin fringilla arcu lacus, nec volutpat orci auctor at. Cras quis ante elit. Nulla vitae nisl mauris. Proin cursus, massa non bibendum tincidunt, ipsum ex pretium leo, eget gravida dolor metus eu metus. Sed non fermentum risus. Quisque est tortor, rutrum quis felis id, venenatis commodo urna. Phasellus pellentesque sit amet metus at sagittis. Phasellus vitae elit volutpat, luctus urna sed, maximus risus."
	return(<div class="home">
            {PublicPageHeading(Heading, Text)}
            {PublicPageMainText(MainText)}
    </div>)
}
}