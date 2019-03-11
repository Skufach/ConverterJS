const input = {
    p1: {
        s1: {
            title: 'scene 1',
            description: 'description 1',
            value: 1,
        },
        s2: {
            title: 'scene 2',
            description: 'description 2',
            value: 32,
        },
        s3: {
            title: 'scene 3',
            description: 'description 3',
            value: 89,
        },
        s4: {
            title: 'scene 3',
            description: 'description 3',
            value: 0,
        },
    },
    p2: {
        s5: {
            title: 'scene 5',
            description: 'description 5',
            value: 0,
        },
        s6: {
            title: 'scene 6',
            description: 'description 6',
            value: 42,
        },
        s7: {
            title: 'scene 7',
            description: 'description 7',
            value: -9,
        },
    },
}

function Item(projectId, sceneId, value, title) {
    this.projectId = projectId;//string
    this.sceneId = sceneId; //string
    this.value = value;//number
    this.title = title;//string
}

function OutputMass(mass) {
    let Out = []

    for (const key of Object.keys(mass)) {
        for (const key2 of Object.keys(mass[key])) {
            Out.push(new Item(
                key, key2,
                mass[key][key2].value,
                mass[key][key2].title))
        }
    }

    Out.sort(function (a, b) {
        return b.value - a.value
    })

    return Out
}

console.log(OutputMass(input))

