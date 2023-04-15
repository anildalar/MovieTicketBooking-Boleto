const statuses = [
    {
        id: 1,
        date: "03 May",
        title: "First event",
        description:
            "If several languages coalesce, the grammar of the resulting the individual",
    },
    {
        id: 2,
        date: "08 May",
        title: "Second event",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis",
    },
    {
        id: 3,
        date: "11 May",
        title: "Third event",
        description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    },
    {
        id: 4,
        date: "16 May",
        title: "Fourth event",
        description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
    },
    {
        id: 5,
        date: "23 May",
        title: "Fifth event",
        description:
            "Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut",
    },
];

const verticalTimelineData = [
    {
        id: 1,
        date: "03 May",
        title: "Timeline event One",
        description:
            "If several languages coalesce, the grammar of the resulting the individual",
    },
    {
        id: 2,
        date: "08 May",
        title: "Timeline event Two",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis",
    },
    {
        id: 3,
        date: "11 May",
        title: "Timeline event Three",
        description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    },
    {
        id: 4,
        date: "16 May",
        title: "Timeline event Four",
        description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
    },
    {
        id: 5,
        date: "23 May",
        title: "Timeline event Five",
        description:
            "Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut",
    },
];

const pricings = [
    {
      id: 1,
      title: "Starter",
      description: "Starter plans",
      icon: "edit",
      price: "19",
      duration: "Per month",
      link: "",
      features: [
        { title: "Users" , value: "1"},
        { title: "Storage" , value: "01 GB"},
        { title: "Domain" , value: "No"},
        { title: "Support", value: "No" },
        { title: "Setup", value: "No" },
      ],
    },
    {
      id: 2,
      title: "Professional",
      description: "Professional plans",
      icon: "medal",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { title: "Users" , value: "3"},
        { title: "Storage" , value: "10 GB"},
        { title: "Domain" , value: "1"},
        { title: "Support", value: "Yes" },
        { title: "Setup", value: "No" },
      ],
    },
    {
      id: 3,
      title: "Unlimited",
      description: "Unlimited plans",
      icon: "layer-group",
      price: "49",
      duration: "Per month",
      link: "",
      features: [
        { title: "Users" , value: "5"},
        { title: "Storage" , value: "40 GB"},
        { title: "Domain" , value: "4"},
        { title: "Support", value: "Yes" },
        { title: "Setup", value: "Yes" },
      ],
    },
  ]

export { statuses, verticalTimelineData, pricings };