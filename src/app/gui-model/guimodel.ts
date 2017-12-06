export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */

    private _guiModel = {
        "application": {
            "title": "Lidias Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{
							"id": "nickname",
							"type": "text",
							"name": "Nickname",
							"width": 2,
							"required": true
						},
						{
							"id": "group",
							"type": "autocomplete",
							"name": "Group",
							"data": [ "Study", "Family", "School" ],
							"form": "GroupForm",
							"width": 2
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
						
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
					"id": "GroupForm",
					"title": "Group",
					"formFieldList": [
						{
							"id": "name",
							"type": "text",
							"name": "GroupName",
							"width": 2,
							"required": true,
						},
						{
                            "id": "Creation",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel"
						},
						{
							"type": "okButton",
							"name": "Ok"
						}
					]
				},
				{
					"id": "ActivityForm",
					"title": "Activity",
					"formFieldList": [
						{
							"id": "activity",
							"type": "autocomplete",
							"name": "Activity",
							"data": ["Swimming", "Eating Pizza"],
							"width": 2,
							"required": true,
						},
						{
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel"
						},
						{
							"type": "okButton",
							"name": "Ok"
						}
					]
				},
				{
                    "id": "AddFriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id":   "friend",
                            "type": "autocomplete",
                            "name": "Friend",
                            "data": [ "Anton Amacker", "Britta Beavers" ],
                            "form": "FriendForm",
                            "width": 2
                        },
						{
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
                    "id": "AddActivityForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "data": ["Swimming", "Eating Pizza", "Movie"],
                            "form": "ActivityForm",
                            "width": 2
                        },
						{
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
						{
							"type": "button",
							"name": "Groups",
							"icon": "fa-gavel",
							"color": "lime",
							"page": "groupspage",
						},
						{
							"type": "button",
							"name": "Activities",
							"icon": "fa-futbol-o",
							"color": "amethyst",
							"page": "activitiespage",
						},

                    ]
                },
				{
					"id": "groupspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-fort-awesome",
							"color": "turquoise",
							"form": {
								"form": "GroupForm"
							}
						},
						{
							"type": "list",
							"icon": "fa-flask",
							"color": "alizarin",
							"search": true,
							"data": [ {name: "Study"}, {name: "Family"}, {name: "School"}],
							"form": {
								"form": "GroupForm"
							}
						},
					]
				},
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendsdetailspage",
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "page": "locationsdetailspage",
                        },
                    ]
                },
				{
					"id": "locationsdetailspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "button",
							"name": "EditLocation",
							"icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
						},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-futbol-o",
							"color": "green",
							"form": {
								"form": "AddActivityForm"
							}
						},
						{
                            "type": "list",
                            "icon": "fa-futbol-o",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Movie" }, { name: "Eating Pizza"}, { name: "Swimming"} ],
                            "page": "activitiesdetailspage",
                        },
						{
                            "type": "list",
                            "icon": "fa-user",
                            "color": "magenta",
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendsdetailspage",
                        },
					]
				},
				{
					"id": "friendsdetailspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "button",
							"name": "EditFriend",
							"icon": "fa-user",
							"color": "green",
							"form": {
								"form": "FriendForm"
							}
						},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-futbol-o",
							"color": "green",
							"form": {
								"form": "ActivityForm"
							}
						},
						{
                            "type": "list",
                            "icon": "fa-futbol-o",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Movie" }, { name: "Eating Pizza"}, { name: "Swimming"} ],
                            "form": {
								"form": "ActivityForm"
							}
                        },
					]
				},
				{
					"id": "activitiespage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-futbol-o",
							"color": "green",
							"form": {
								"form": "ActivityForm"
							}
						},
						{
                            "type": "list",
                            "icon": "fa-futbol-o",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Movie" }, { name: "Eating Pizza"}, { name: "Swimming"} ],
                            "page": "activitiesdetailspage",
                        },
					]
				},
				{
					"id": "activitiesdetailspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "button",
							"name": "EditActivity",
							"icon": "fa-futbol-o",
							"color": "green",
							"form": {
								"form": "ActivityForm"
							}
						},
						{
							"type": "newButton",
							"name": "AddFriend",
							"icon": "fa-user",
							"color": "green",
							"form": {
								"form": "AddFriendForm"
							}
						},
						{
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendsdetailspage",
                        },
					]
				}
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
