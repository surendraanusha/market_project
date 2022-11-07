import { Injectable, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GettingDataService {

  constructor() { }

  marketDetailsObj:any

	userObject:any= {
		user:{
			id:1,
			name:"",
			password:"",
			mobile:"",
			role:"admin or seller",
			bookings: {
				date1: {
					marketId:1,
				},
				date2: {
					marketId:5,
				},
				keys: ["date1", "date2"]
			}
		}
	}

	marketsObject:any = {
		market_1:{
		id:1,
		marketName:"Davis Market",
		marketNumber:"mb-12345@@IND",
		location:"B-no:1-234\a,KSR",
		imageUrl:"https://picsum.photos/200/300",
		contact:9876543263,
		description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Saepe inventore nam quos amet dolor, similique modi fugit?
					Mollitia enim fugit, pariatur labore necessitatibus rerum 
					nesciunt nisi, blanditiis, quod porro in.`,
		slots: {
			date1: {
				available: true,
				seller: null
			},
			date2: {
				available: false,
				seller: "user_name",
			},
			keys: ["date1", "date2"]
		}

		},
		market_2:{
			id:2,
			marketName:"Raj Market",
			marketNumber:"mb-12345@@IND",
			location:"B-no:1-234\a,KSR",
			imageUrl:"https://picsum.photos/200/300",
			contact:9876543264,
			description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe inventore nam quos amet dolor, similique modi fugit?
						Mollitia enim fugit, pariatur labore necessitatibus rerum 
						nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				date1: {
					available: true,
					seller: null
				},
				date2: {
					available: false,
					seller: "user_name",
				},
				keys: ["date1", "date2"]
			}
	
		},
		market_3:{
			id:3,
			marketName:"Tony Market",
			marketNumber:"mb-12345@@IND",
			location:"B-no:1-234\a,KSR",
			imageUrl:"https://picsum.photos/200/300",
			contact:9876543265,
			description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe inventore nam quos amet dolor, similique modi fugit?
						Mollitia enim fugit, pariatur labore necessitatibus rerum 
						nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				date1: {
					available: true,
					seller: null
				},
				date2: {
					available: false,
					seller: "user_name",
				},
				keys: ["date1", "date2"]
			}
	
		},
		market_4:{
			id:4,
			marketName:"Jhoney Market",
			marketNumber:"mb-12345@@IND",
			location:"B-no:1-234\a,KSR",
			imageUrl:"https://picsum.photos/200/300",
			contact:9876543266,
			description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe inventore nam quos amet dolor, similique modi fugit?
						Mollitia enim fugit, pariatur labore necessitatibus rerum 
						nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				date1: {
					available: true,
					seller: null
				},
				date2: {
					available: false,
					seller: "user_name",
				},
				keys: ["date1", "date2"]
			}
	
		},
		keys:["market_1","market_2","market_3","market_4"]	
	}

  getMarketsInfo(){
    return this.marketsObject
  }

storeTheUseDetails=(userData:any)=>{
	console.log(userData)
}

}
