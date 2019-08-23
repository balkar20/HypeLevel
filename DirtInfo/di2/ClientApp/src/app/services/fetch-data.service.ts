import { Injectable } from '@angular/core';


@Injectable()
export class FetchTopDataService{
    
    getTopRebbates(){
        console.log("from getTopRebbates() in FetchTopDataSevice");
        return [
            {
                id:1,
                title:"Trump insulted hisEuropean friends",
                content:"As of 2017, text messages are used by youth and adults for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail, and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to ",
                imgPath:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/07/16/sherrod-brown-nan-whaley-donald-trump.jpg"
            },
            {
                id:2,
                title:"Medvedev said that there wasn't overhearing our masages",
                content:"TextNow is committed to fostering a welcoming, accessible, respectful and inclusive environment ensuring equal access and participation for people with disabilities. We are committed to treating people with disabilities in a way that allows them to maintain their dignity and independence. We believe in integration, and we are committed to meeting the needs of people with disabilities in a timely manner and creating a barrier-free environment. We will do so by removing and preventing barriers to accessibility and by meeting our accessibility requirements under Ontario’s accessibility laws. ",
                imgPath:"https://www.geek.com/wp-content/uploads/2010/06/Dmitry-Medvedev-and-Steve-Jobs-hold-iPhone-4-550x352.jpg"
            },
            {
                id:3,
                title:"Our cars waasn't stolen from garage",
                content:"TextNow gives you your very own dedicated phone number with which you can text and call your friends, family, significant others, neighbors, or anyone else you would like! This number can be used anywhere within USA and Canada! You can also send and receive picture messages or create texting groups! Your friends and family don't need to have TextNow, it works just like a normal phone.This app is beautifully and simply designed and will integrate directly with your Windows contacts.TextNow is also available on the web at TextNow.com. Take your phone number with you, and your messages will seamlessly synchronize!",
                imgPath:"https://rossoautomobili.com//wp-content/uploads/2018/05/ferrari-collection.jpg"
            },
            {
                id:4,
                title:"this factories is very safety for ecology",
                content:"Rather than expect people to answer a cold call or wait days for an email response, real-time communication combines conversational text messaging, cloud-voice service and personalized automation to help you connect with people in real time.",
                imgPath:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUXFRcWFRcVFxUVFxgVFxUXFxUVFRcYHSggGBolHRUXITEhJSorLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGzYmHyUtLS0tLS0tLy0tLy0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK0BJAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEYQAAIBAgQDBQQGCAQDCQAAAAECEQADBBIhMQVBUQYTImFxMoGRsRQjM0KhwRVSYnKCstHwB3OS4SRTwhZDVGSTorPS4v/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAyEQACAgEDAgMGBQQDAAAAAAAAAQIRAxIhMQRBBRNRFCJhgZGhIzJxscFSYtHwM+Hx/9oADAMBAAIRAxEAPwDFUopctLFepPL2JThSRSioAWuikpagDhS0sUsVAWJSgV0V1SgHTSV0UtQh0UoFcKUGoA6nZqSuqAHTXTTalS3UewGPw6kmiyDTSqgCjarViTsKzZHZpxJLYlQxuap4nFwY3qG7ijqCKit2Wc6RRjjrdglmb2iXcLcLGiJslfQ0PweRNc1XLuPVuYqqad7F2KUVH3nuK6iqN61NSXMWvI1GcStGMZIWU4PayDu/KubC11zEHkYqu+JPWrkpGdygSjTTb0qBgKja8aZ3hqxRK3bJ4UUly7UOemk0dIaY9rtRFjXV1GhkqEy0oUV1dFQI6upVpKG4pHFdFOilimGsbFPW0TSRT0aKgGxuSNxRThlm2YDKPX/ahhanJcIpJxclQYS0uwlxizAAUDKPKIPT0oRFW8Ri2YQarVMcWo0wzknK0JS0lLTiHUtJS0aIJS11LUIIBTopKcKgDlohYuKQRAHSh9PWklGyKTTsIFlB15dK5+ImIURVJrhPOmlaTy13D5suw83ddRPrSPe91My00irFFCC5h1pM9JlpypRJsdnp1cFFLFAW0Rs9MNPIrlWiOnRHFLlqUWvMU1hUsmoYabFONdFEI2K6KdFdlqBsbFdFSKhOgBPprVqzwq821tgOp0+dK5JcsMU5cIoxXUUPAr/6k+ldSebD1H8rJ/S/oC6WlilirCqzktk7e/p1qX6P57CdoHLmxHWtn2U7KjEWkuMYTWeWZszA7a7Eaz8q22B7K4S3taBI5kCfiNT765ubxGEJOPNHTw+GznFSbqzxlMMpZRPtRPjTST0pi2BlLSNCB7SncMfy/GvfDwq1AhY95+G9U8Xwi0d0keZY/hNULxT+37l78K/u+3/Z4ecKc2Ufqhp5QUzbjyqIWzEgaaD3mY+R+Fet4vsxhzqLYUxEgAaRG8TtpvWc4r2TC2zlJ1dfMbONmM7kfe51fDxPG+diifhmVcbmGiuozxDhzBmzLq1xY3kKc06f6eooU9oiJ5gEehE1ux5YzVpmDJjljdSRESKWKd3c0uWnjJuTQJJKKa7jYrop2WlC0xXY2up+Wuy1AWNpRXZaWKgLOFOFNinChQGOC1xSuBqRWFB2KRZKWKtrbFTYjDQNqRzV0OscmrBhpalNk9KYVp7FsiK03LU2Wuy0Q6iO3aZiFUFmOwUEk+gGpoza7I4xrZu9yQo5EjMdYICbyPONqn4N2lOFsXLCWBca4T4idgVAiAJO3Ub0xu03EdMtwW1UyLaqoU+RBkkeprJmy5YvmMV6yfPyOx0XQefDVGMpP0itl8wC6EGCINNArQ43F/T2Vu7Fq8oAu8lbeHHProfLU1Nwrglt7hALHLvIgEzy61Z56jH3+THLpZeZpj61vt/tdy7c4P3+CwQQKrTeztAmARqeZ3FWMJ2QtD2pf10+AFaCzaKWrYP3bt1fiqNVy3cHSuPLqslNRe1s7cekx7OSt0l9AThuB209lQvLQfM86t/o5QI36mrxIpGcVneST5ZoWOK4RXFhRpFLXM9dQtjHkVywRpTMlbD6Ep5Uh4Tb6Cu4uqXc86+hn2Zs+wKxgrP8f/yNWlFB+zNsLh7ajYA/zGjC157M7ySfxZ6TFHTjivRL9h6mq96rAOlQXzVRYUb1BuOj6lvd86M3KDceP1LD0+dFcgfAD4kJANZ/E8OzsoAXKDMZgCVIUaAx+ryrQ44aL6D5VjO0doti0STlFpZE6SXf/aroZ54XqgUZcEMy0yLVvgdyNbTloJjK8TmAGw6Sd6kfgF2T9S8ZZHhf2oGnxr1nstgUs4dLaRooJI1BLCZB6a/hRMqAIGwrUvEp3dGZ+GY9OmzwpuEXBllHEqSfC2hBbqOgHxqsuEYxGpIJjplmf5a9yxNlTuoPqAaz/GcDbyg5YJcLI8ww0nbflV0fFX3iZ5eER7SMXwns0tyy1y4zKQ0AAiIyZpYkacudCcZwwrBU51IBzAaTBJWRIMQefKthdvsgKaADUZdJOXLrOskCN4rP2OLyc12yACuhEZjOm+hPOhj67K8u26fYbL4fhWHfZruBHtkbimRVzHXVdpQELEAEgncn86rRXajK1bPPSpNpOxgFcRUkUkU1i2MilAp8V0VLJY/DzmHxo9w3geIxK50gIGyksdZgGABrsR5UJ4Qv19qdR3qAg8wXEg0Wx2AxN2/fs2Td7oXrkpbzBJmPFBCjQAa9KxdTlUO9bc1f2R0/DekfUPTFXvxaXa+X2L+M7Jfds4hLtwL40BVWEzyk/jFZTEWGRijAhgYIPIii2J7EYm1DqrKwEju3BcecL/00NxIumWvEs4OVidGMDwlhA1jT+Gq+l6mEpUp38Gqf+DZ4n4VkxY/MUVS5cZal8+6/XgqlablqSkroHn7Nd2F4BaxK3GuF/Aw0UgTIO5ieXKtWnC8L9FZ0sKPC3tAs3hP6xM8utB/8Kz4cQPO38n/pW1ewqplA8PT3615nror2iT/3g9n4d1WZ9HCGp0r2v4sweL7NIrtcskLAYlG1MK3iCvvE5dD13O1JwzBplknWSfu6g8jpqNfwrV4rDa5l+Hqyk/yxWZw2F7u5cQyQGME/qnVY9xFDClpaLOoz5JTUn+n/AKW0wdq3aLIihvpBloltbMxm3jfTan28SBzpcQD9Hbyvp+Nsj8qE608Y2imc3YZGKFNfExQtZ608ITzqaUTWy0b5rqq5aWjQLYCHF0qZMcDSNwxelN/R4G1dD8N8HM/HXJ6N2dM4e2f2fzNFVoV2fWMPbH7AootcTJ+d/qdyH5UPqDEGpxUF4UgxRuCg/aAfUt/fMUau0E7Qt9UfX81orkD4A+MHs+6slxfXGHyRB8z+da3FnUVkceZxlz+D+RaLFPT+wOILWmU/dIj0OYx8ZrTXKyn+H6+C4epUfg39a1T0r5HXBWuignHPsx/mJ86NXaC8e+y9HT50VyR8GcxsZxO3PQH51lcdbIS0YgFTETtO+vXetRxQams2HuXEsjKGAQiT4Ro0KPWB+FbekloypmDrcfmYXEH5afbtZpjcVfOAmu/R9d7zEeY9nmnwDWtkaGky0WGBFKMEKnmxD7NME5aTLR7D8OVt9vKidvhVsiAB79aql1MYl2Pw/JPezLYE5biMZhXVjAJMAgmANSdNhXo3ZYtet43wsM2LuwGUqfujUGNdD/vvQzD8Ctr49ZGoHKRtWn7P21Q3o+/ee5/qMiPcRpXM63PHJx6fydnw/pZYF73r/BLxa0xjLuLbDzkjSPhQbj/D+/tOuUZwZQxr4VDRPMasK0GOugEEkDTnpVZLykkAiRuOYEkAx0kHXyNYINxakux0pxU4uL4ex5ViOFOhggg+dQnBmvR2sBjB2zH58qr4jhFpWLDUHaRsffpXYj1+26OJPwmN+6yDsraGDRu8ZVzldScuwMb776etFeJcdsyhzgQx30kSBp79KzVi4ofEBrRFxczKxUsGUzDyfDoTqOU1T+lo/izWgNAQbdtmOoMkIsD48xXKzSeSTk+WdjBjjigoR4RtF4xbIA1gkgMNj1YE8h1rP8dxNwXiFykEAzIHIdaDC1YL5rT2swIYQYObKACVMiPL0onjmYgEEAQAcp0JGx5QTFWdMvfK+ovR/gtWbx+iXQxGfvLbQNdBpJjbeg5xPnRTAAnC4kE87R/98UGIFa8cLcl8TJkyNRi/gSjGGpVxh61SgVGTVvkplHtDQUGN866hJauqezIHtcgtmY0oJ6VRN1qjOIbrRWMZ50j07g32Nv8AcX5VfWqPCB9Tb/y0/lFX1FcSf5mduPCHVFeqWobtKEp3aB9oPsT6/mlG71A+0M917z80orkj4BGI1K+6slix/wAZd9V/kWtbf5Vkr2uLu/vD+UUROx6Z/h99nc/eX5GtU4rL9gPsrn7w+Vah6V8jrgp3qC8d+yb1X86NXaDccH1Teq/OiiPgzHGefp+dZrhOKRLaKxCysyY18R/vWtPxYan++dBOC2lFtDAzZd41AzHSdwK19PerYydRWh2XmWkIqUUhFdRM5LRFlrstSGkmiKNAqZLrDnUWakN2g42FToJ2ce0wdtNvUUPXiGbKxd2z8ge6CwBEoqtJ5QRypcJcJbT+9RXY3BgulguCe+uPmeD4WC77AnfTpHUVz+pgoyR0+lyOcW2LiDdKsVa4G0IzOt2ZmCyOAAIg5SBoRScH4hiLVwr3dxwSoLeFBlygkBYgkMzc+ZE86n4rwvDImRgpYjV4Ckknf4x5DT1rPcHwT22+3AUHTxxvy0gzuN6zRjZplKjeEkEkwPXSkN9DpmLeSz89qzfe6x/v+NW8PqdwPePzrVLA0rbM0epUnSQ63gUt3ndrjKl9Tb8RDQ7agwBounU1fXg6YdDJZjABOQlcsbAjTL79hQXimFtLLvdRIE6vJIjSEG+/KrnDu0du5YvqhdrdoIVLbiWggaezrtWaSNUdwLxXDYdr3ed4UJAlRIDAaDYiR5Tr0M1eAs5JtEEDQgCCPUHUe/rQrH4jD3bqqc+aMwDWzliC3hDDoBqJjbeaJnEW8uQEyBr4WC+4kRMEaetWdO7kirqVUXsEOEmcPihP3EPwegbzRngwm3iRMfUzy5MN5oTNdDF+eXy/Y5eb/jh+jK5BphBqyRSZPKtFmRxK0V1WO78qWjqBpYoY9KQnyoiwBpmQ9Kz60a3jfqeicOH1afuL8hVwCq+DHhUeQ+VPuYu2hAZwCdq4ct2d9E0VDdNOGKtn/vF+IpHg7EH01oBKV6gfaEfVe/8ANaOX6BdoAO7H73/1qLkD4BF0GR6CsiT/AMTd/f8AyFbBhqPQViUuTir3+a34GKbuIz1bsD9k/wC8PlWmc1muwX2L/v8A/SK0r0r5LFwVbtBuOfZH95fnRm6KDcbP1Z82T+aogMznFfaPu+dZvh9oNbtsHZfBELAnxEzqK0nFtz7vnWY4aHyJCFlybjKIMnTU1s6ete5k6nVoenkLC950vfVCqGNqWK6ySOI5SJO8FODioYroo0gamTE0wqOtNiuipRLJ7d/uV7yCZkDSYgCT5xmELzJodgOMYNMT3pv3GuB2mFZuWmVSDBOYEk761eDAdznHh725Bza/ZL92PLrRHgmFttiHZsJdKy3jjNJXKgAAUAjw7EnnXI6iX4js7nSxrEqGcS7SJcUtkuxG7qJyhlGy67sNKpcLtWLf1igGSGPhhyXyMNwP+YNPWt59BtOrFsMF0+8FncHYbagH3UDv8MtFSpsXEAU+yQVhYIGpInwiKpUkXtMp4pbNwfqnkdjPn1qDhvA7l1mCwQoGsxudPkafxLh7BhkBIKg6xoTyox2RsQLwciCqzry8UyeWlb3PRiuMjnaFkzVKPzM/jux6WGfE3ntFPvLq1w6W1QZ3I2KnSDOaosHZtm1cuW2yqVAcMg+49sSsNoDmn1Fa25jOH274wzBM5s9+JUupthsobMZBM8t6H8bxFp1uG1BXu48IK657emw8q56lb3Om1Sskw/AcILVu6UbRcoMsSBqF02gZzyoXxLhQysbbo2UFhJYGANo16dBWq4ffy4dCQxgEHTU+LeP72qnxO5auW3ywHyNygkZZI28vwqY5OMlTFyJSg7VmY4CtwjEAFQPo7zKknQgwIYfH8KFZaOdn11vAaTYufKhOSuvipZJfI4ua5YoP9SsVpINWSlJkq/UZNBXk+dJVwM3WuqamHQvUtKvnWiw3AxuQzebHIse6W+VAsI/iVeRIHxNQ8VbFO5HeMYIKqD4SpAdcpgToY16Vyepnk4idvp4Y6uRr8ZxG1bH1uIA/ZtnLPoZnrsRsPfnO0OOw1xbVwIGQMS2ozMPZkz4t9PdWd7Y4YpdF63lh9GDN4iVZkJKxJACrrvqByq/iBbt2LRd2a3knwgJmzXWI0aSBE+dc6MnqdnRaWkjt4nDhQIdWzeIqSBl10XUa+z8KsrirfiK3rw2yAsT91ZJ1PPN+FAb+GCMV71iNwfDDKRKsPDsQQaZcvrbUs10ADeQD+AqzzGJoRrRjjPgxbQFnVN2lvD7PQL8a7iWKuRYm8j5s05hAPsgbH7uvxrCW+LpfbKrt3Sqz32CFCttYEKWPtMSFEc2HKj3F3JTDgIEJQlUkwB3VglV9JPwNFT9URwNAS+ulpoAnK7DfYDfqKD43suGdny3rbSGY27tsiTsIa3zkfGhttn6D/V/UU3E8T7lWJ5CSMyT8Jo616A0G94FxT6Kpt9xdaXH6s5mUQuh6CaLJ2stGJS4J28LH5Dzrz3huKvNYzm4/es9t1UfczAC0sn7xVgeXtqKXD8XuZYzNEFfZY6bEbULT3olNbWehHtDhm+/H7wj51R4nj7bpCurS6AQQeZb3aA/CsjiO0TKpa4wiBMpB0aQNuvzq0/ES+GS49tFzXVaNPYZHKZoOhKwfRxUTiRplviltzJCsdtgTz8qD8EtstpFYd2conMCvM9ef9au28bZJnuU3B8JK6BYy6cudWMPfViFVbs6Dw3G/W8R6bVbjyaXsVZMWpUxpwxgHMDI1pj4WOdWblySTA30/KmOxNdCOSbOdPHAitYOdToKlHD9PaFcGI05VJhyHuLbmCSswdQCYmKMpz9QQxY3tRWuYSOYptu0ToBNa48BsLq7t6sygfKkW1gUI+sSf806nzUNB9Iqn2xUXLod/RGNxiE9zHK85gR/ygNZrY28ZiEwzG3ZBIW4UZmBkjNlhBqRMaUTwmHslVZEQqRmUhRqCNwfMVdVQKx5JapWbscdMUihhDeZJuhJKDRM05o1mflVE2MTBBt22mRoSuh65pq/xziQw2Hu4grmFq29wqDBIRSxA89Ks2r2a2HGkoGE6xIn30lDGYs9nbrD62CZ+9cuNpOhy+yNI0A5UV4TwVbIcAJDgBgqxIE6Hruass9yYzKP3Vg/iTXKHn7R/gg+SzU1DW/Ur3eCWRcOIyDvFs90pAgC2GzZQOk0B4uU7m6uq3RCqSzOWzZWkhySYgbVsL3st6H5Vg+I41LWIi6GZLijKRPhdTHmOanURvNRETAve8WVwU4gnd6lR3KXJAAzyoUNMmdDG+2xM2+LYwBkxJw9yQwDWkdTBBWfE5+QobxF8qhkVZkHQtuIgx/CD7qqYbGvmgwZ3ECfMjUQJPSrMVJ+8hc61Reh7h3gI+sYdbN3+WhmWpOH4hhcBGYeBxoEI+zZjrrpoaqo1wgEMhn9k9QOXSa1rOlkZhl0knijbRKUpMlQpduayqEiBoWWZOhEg6belXMtaI5dRjng0PcgyV1Sla6m1CaEPwF5C9s5hDOmUzvJBEetW8SyjuiWGY2VOX9bJofM7CvHOw+Kd8Xh1JJAvWjE9LgbX8a9E4jilNvvJ8dm99FSDGl8YS6SPdm/GuRkzOUvl+52MWJKPzCnHOHJesAtmlXvBcu5LsSB57bUD7WX5wqBA8ZxaGQOWCpfvpmAXUiLc+dEmxKFsQjEk2RbxKpuZS5dIKjnMgR5DrQvi3Gnw2CsXSQ7HIj+LSe8xBcK2sgFSAaHu3uO3JboHcSe+qmxaXNdshXthhmNzCs4UmcwOdWIJnLo7aQJodxK7deyq3VNq4pK3lBmc7eDRSdMqnTXcdRVez2tbv/pQTxd01sAER7YbXTVTEH1o1xDFHvLmJyzZy27tmdVe4RFlCP2CLhcT92PvCpJQd0ho6lTYAxlwWGXCE+IHv8VoNCqlksHyRZJ/acj7orR9tuI3LLYK6iZyqFyAJ+5hRrodCTl/irN8IxGfJfaHY+F88NIVmuXi0nWUtsffWj/xD4jkbDtBHe4e6oiJUutgrEbEFRqKVKN1Qz1VqBvEeLGfqLcI1sX0ckEC2WCspAHtq8oRO4oLhrIN+5evqpt2lF67B0fYJaB11d4XeQMx+7V7gmKL2r2FI8Wty1O+jK1+0Oeq2w4HW2eZoiXsKhsXLKu1uLl3cAXu7YjOBo2RTB/ad6iUSXNbBZse68MvXrh8YvAuw/5neYd2IjYBrkfw1Q4n2nti2mISWF2WAgAKysBeUmDEEggdHWoMJi83B8WSJBxRIkfr3MMffBNZ3gpF5HwZUeMC9ZUaReUHwDX76Sup3yUNMWH3kE+FE4u+3es5tKc91S/hyKRCch4myIDG7A1u+KcSS1hrF286ZXvjOV9nVbwaOmxgcoA5Vgrf1OHsgCGuZb97WT4VVcHbMdRcF4jnnQ8qucah+DYRf/Nldes4k/nUSSdElqe4dxOPVLgtEKSWyyACNs06nYiCPUUY7JqzpZctDXSugEeBHzO2m2Y5V22D71iez9o3vo7AS6ZcO/XLBOGuHyAFy2TyCr1rT8M4jGLwtu00WRlRAYl7a5lB9WMsRpqaeNIrkpM0V0AEjoabNYTivaLEpiL9pWAC3bkGATlzmBr0qjc7Q4gCDeYb6wNJEdKv9sgtjE8DbZ6XbSTA3qBr/dYmyp1+usjQ/rOoB1Gu9ZDszxy82Ktd7cOWWzDlAtsZMDrFaPHYlXxdhkaR9Iw40I5XVnzoSz+YtuC7Di0b9z0Xi3DxfUKWywxO07o6df2591DrPZhAQe8aQQdABsSfzo9SxWezSR4OwLaJbBJCqFBMTCiBMVYFZzszgcZbu32xN0ujN9SuaQq99eI9Pq2tD+Gp+1vCbuJsi3Zud2wfNOZlkZHWJXXdgfdUIGb1pXBV1DKQQQwBBB0IIO4pwAAgREQByisr2l7KXMXw63gjdCOq2Q1yCwJtqAx5EyetaXC2cltE3yoqz1ygCfwqEGHG2g/d95bzyBkzLmkgkDLMyQCfcaemIQuyBgXUAso3AacpI5AwfgaB3uyqvjRjTcIYNbYIAIm3avWtTzkXyf4RRm1gVW7cvD27iorelvNl/nNQhLd9lvQ/KvOe14D2yFJz2ouaBvZmDrEdDHlXpF32T6H5VkLyL4iR7ShTO0dPfRIZbi6EWyTESBpIjXqRE+k0I4Qylz3jGQZJJMlfCZhGBA35c/OjXaLAsLLE6eJdVQE7yNtwfT31nnvNZ7yBGYF08JlWhLYbcTBbbQa0Z7jY9mHbTPKi2jMco9kOPA4dSddjA328QqPE3LltfEsNAgM66tIIXTafdQLBi4jK1u5lZu7zMARKgGFYsDG42I2q5i3whuOt7iBDs4Kg2s8CAIBBEiZ1Gu1VKT5T3NMoJVqjt6kFntBmcSAFJIgNLQsQYA8uvMVdXtHaMyrjfl02n1qr+hM7qljE278nxDWw8gnKVDsRyA9rWPgDxWGykqNGVmVlcFSGBysOkzIgTTxzZI8GLqMUXRoD2pt6eFttdtNdv7611ZO7bcaFTMdK6m9qymTyV6Ffsvwu5h+IWlcrIIYFTIOuhHPkd63lq5KO5w+HJTF4bQi82ZT3dk3RN3Rx3gAO0IZG0Z7s9w83MQMRdLi4ruQMyFCpRmHOd5Mela3g6WWxmXvSGNvu+7g5SSwvhgYgsCOvKq4O93z3OnmgoTah+XtZHw/EXDibyBMOG7kLauG1LtcZblxUdi3iWLbEgRqRQLtVxK4mAw9wWrObPbGQWl7sR9K9m3sNvxq5xTGpYxGFZrgSHW+xIJkKotgabad4P4qvdteDq1oWQxAV1Zcq5t+/IBEiBD70+63ozOTa25MJe40+VIs4VswBINlfCZgggHTUHQ8oqb/tLcdCrWcOVTVVNsMoknMQM2kyDoOZq/c7Jwgi8ICElssQxZlIjMJjX4VW4bwBznRVBuLqW8OoLgKo8hv8fKkVssUpdx+A4ie7zmxhhIIXJYMFiVUq3i0lC9E+3+LNk4Q93Zci2T40kAgWvYGYFR7+QqM27kJhrazqVtkAFQ+oUnMBnMsIJmNduVz/ABBw4a5h1YE/VsNCoIOa1m9rQQqt02FLjbdssyWkkZexx+5buqyYXCq4ghxauAgldDmFzzqThXGBea5OGw0nNmIW8M7GWYH6zXYz61PiuG2gc1rMwIlSR4oBSC+uky/wXqYu8K4NbZ8mUFsouI2XXPnRZEMNR4zsZEHlqXKluhFqb2f3L2CQ3OHX8mGs63wq2VFzIxDYcywLkz4txHs1AeGW7TYa7bsYcm46ZSEvKUIhgSO+OoI2MbVpsJhHtYRgglmuM6a75+5jXXoRWM4vbxiHKxJiXt5lURcJJJAyiRJ6Rp50G5aqRYq02+STtHfVHc3MPausxzsc15ZYc4Fw6gAegirHFr6fozDuMOhX6UzC3mu5Rl+kAsDmzalCd412oLdtXe9Q3kyw5jMMpZfZYkKugO+3OtrxjgTLw+1aDCbb551IILXoOnUOD50eNxHfYy3AuLrbeEwyJ3ltrbFbl4nKT7MM3MqNaK8MxdtsXgcmHhnZYc3LngBk+zMdd51odwXhRN9FVgxJIA2iOcnrWk4Tw4W8XYtKVZreRzoZ7vMA2Q84Zx7pNWKuGI5SMRxwN9MxBG3f3Z2H3zG9RxJ1gjf30c7R4MHFOFJOa45OimGNwgDVSZ1FN4bwoXQQBEbzkXkx5Afq7VmlG3dg8mT3I+CWwpZmdVBGjMmc66EAA6eflWjwWJU37BVVcNibRzgEAlrwkhZPWR6UrdnBbhPq5yk6noRrGbz/AAqbh2Du2creAC24ZVOYxzBMNEGpF6VyaYRShpaPSeKcRWypJcLt7W0ExvoPxocvadCJBXLP2gIZdxyB5kxvuRWc4nxW7ftEuLeU6eEMDpIB1aNM1V+J4JwsLYR/rbTm1bDRcEPKkAGOvT31emmUtNGtudqkXU23ZeZQDTfWDGmm81La7Y4Igk3guXcMGkaxGgI303rPfpe7aVgEyIjPmcox+9MSVgTAALA776Vmsfg1xzBbYVXhizB7kqDczE6yTy5aeURQlNR3lx6kUW+D2KxeDqGUgyJHWPMcqi4hhS6iLlxIO9s5T6HrWBwnCLiTlxNplJEKMPbIXrqDLExzpmI+k4a2bwveIsFKqkLlDHXKDoYHL41zl4r08pKMXdutr/lI1x6NtW3X6mwbg5/8TiP/AFP/AM1S4jwvJZuXDisSMqMc3eMcsKfFlG8bxzqHsVxF763C7lyGWDpEEHQQT0n30W46n/DX/wDKufyGt12rKVH31H4ma4PdwuKu5Ld/EtCElWa4Bow8WY+sR51dxvZawEClrra6lrhJO+/L8KAf4fT9KInTum/mT+lbjii+A/3yNJhya42y3qsSxZNKMy3ALDie8usN/tCeVQP2ZsEGHu7ge0eoq7aWLyR0bYR901cxfsn0rQjG+DJcbS3gVJtKl5okrfBuFI9goqqYBJ3jTSquC7N2cRiLudWATVcqsokMTElIIgjY0/jmCtfpN37xVYYqzFvwgnW1yjzNbni1kfR8RAAOXERp/mRWjP0Sjpalz8K5r6iYesbUo6fv6NnmWDQW8ZdBuFLWHt5w5Ck5wSoYSkTKkRBmdKbieG38WxHdFmcwLxhcygSHuAezrsdz5mjnaDgCX7dq4A2c2rKsQSRkCBj4NpmNar4LiN60VRdXEqAzMBkIjKPZIgRGukT5VhjJbr0bX0Nc4PJFP1p/UH3eweNWFS9aygafWOv4RS1obZvMWOQRmMEX0GbbUjKcus6Emuo38BfJh/V9iK12cIcOXkhWAAZgJZCp8JMefyipsNwkpdF0WwSHzTOuvtc94MD8qLg06KotlnO4EOEcZYXYCZVDO2hMExuau4pGMMWKyiZoy6wpBGo8+g/Kr1OFMpNWBpNL4Gev4YFCqpACsdVA/WY/djUuaEWrt1VOVNWO4DArBkZYB5nSelbmlp1NoDiYa3wzEXWR2dpSMpZByaQSYEkEe1uYo9x7gn0i8jkDKskggHcgwJB6RPKjkUsVNb3C4rYCtwoG5eud283RDDPoAI26zA0PSpbWCTOj9wVa2oUGTqAsAe1MCfKis0mag5MCiikqNAX6PCqQR4lj2s22bqJp6ll0GGDCSd1JBJndzp6CYq3NLNDUw6UDcZau3lyXMPbKncC4VO/Ub8ulWktOqhAqQoCqGAYBYIAg9PWrFLNG2SkVcNw/JbW2oVYnymTOpA1rsNwGwl1b83DcWYYtm3kEHTWZO/Wrc0oNTUwKKKg4Dhs5fISxbNJOxJnTTSnpwTCjayo+NWZrhU1E0ocmDtDXIs9con4076Na5ovn4V1/Cm13voWGixaW2ohUA9Ao+QqYYmOU+v8AWqRnrXCjqYKRcxmJFy21p0DIwhlLNBHu2rLcf7OBrOXBBcPeCi2jm7egWg2Y2xBJUTroN/WjpNMNyo3ezJsuDF3+z/FQR3eKtzEO5u3FPLVES2FUjruZpmH7FYvP4sTbW3qCga841J1CkqAxmfWa2001LsmI/GkUIrhL6B1S9TuAYFcKpAcszGWMZQTrssmNzzojiL4dSrTDAgiRsdCNqqU3P5U1EtDcFgbNl89tSrQRMk6H19BVvEXs4gk+6P6VVNwdKUHyFRKuCSm5O2IuHWQ2pI6mPkBU5ZYjIPeT85qBj/cCoy9NuJsU73AsKz941ubkhs5uXS8iIOYtMiB8KkbA2zOZrzTMg4jEQZ38IuRrJ5VPmNdFM8s3zJ/UVQguEh+HZbahEAVRoNz+J1pxxJ61FlpcgpBhxxHr+FdUZA6UtQln/9k="
            },
            {
                id:5,
                title:"Julia says that she hates children",
                content:"Rather than expect people to answer a cold call or wait days for an email response, real-time communication combines conversational text messaging, cloud-voice service and personalized automation to help you connect with people in real time.",
                imgPath:"https://static.mk.ru/upload/entities/2018/10/09/articles/detailPicture/01/04/36/c1/2509f7852a420c81bf0da45865160c92.jpg"
            },
        ];
    };
    
    getNewsRebates(){
        console.log("from getTopRebbates() in FetchTopDataSevice");
        return [
            {
                id:1,
                title:"Trump insulted hisEuropean friends",
                content:"As of 2017, text messages are used by youth and adults for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail, and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from e-commerce websites, or to ",
                imgPath:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/07/16/sherrod-brown-nan-whaley-donald-trump.jpg",
                rebates:[
                    {
                       about:"numbers",
                       mediaPath:"2wCEAAkGBxMTEhUTExMVFhUWFh0YGBgYGBgYFxYaHRgaHhoeGBgaHSggGRonGxsWITEhJSorLy8uFyAzODMtNygtLisBCgoKDg0OGxAQGzAlHyYvLS01LS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf",
                       content:"As of 2017, text messages are used by youth and adults for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail, and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from"
                    },
                    {
                    about:"names",
                       mediaPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgD0JojXvLsDV0WRbzRjs2ymbSmSTO_xZJgfu1GZDA26v2bjV2Pgf",
                       content:"way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail, and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from"
                    },
                    {
                       about:"koffe",
                       mediaPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmQTeMB-NT8hCepO5jxiOP_nOyCa3eyLZdNWXuSl--bgOdp6C",
                       content:"hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text messages can also be used to interact with automated systems, for example, to order products or services from way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busyi with family or work activities). Like e-mail and voicemail, and unlike calls (in which the calle"
                    },
                ]
            },
            {
                id:2,
                title:"Medvedev said that there wasn't overhearing our masages",
                content:"TextNow is committed to fostering a welcoming, accessible, respectful and inclusive environment ensuring equal access and participation for people with disabilities. We are committed to treating people with disabilities in a way that allows them to maintain their dignity and independence. We believe in integration, and we are committed to meeting the needs of people with disabilities in a timely manner and creating a barrier-free environment. We will do so by removing and preventing barriers to accessibility and by meeting our accessibility requirements under Ontario’s accessibility laws. ",
                imgPath:"https://www.geek.com/wp-content/uploads/2010/06/Dmitry-Medvedev-and-Steve-Jobs-hold-iPhone-4-550x352.jpg"
            },
            {
                id:3,
                title:"Our cars waasn't stolen from garage",
                content:"TextNow gives you your very own dedicated phone number with which you can text and call your friends, family, significant others, neighbors, or anyone else you would like! This number can be used anywhere within USA and Canada! You can also send and receive picture messages or create texting groups! Your friends and family don't need to have TextNow, it works just like a normal phone.This app is beautifully and simply designed and will integrate directly with your Windows contacts.TextNow is also available on the web at TextNow.com. Take your phone number with you, and your messages will seamlessly synchronize!",
                imgPath:"https://rossoautomobili.com//wp-content/uploads/2018/05/ferrari-collection.jpg"
            },
            {
                id:4,
                title:"this factories is very safety for ecology",
                content:"Rather than expect people to answer a cold call or wait days for an email response, real-time communication combines conversational text messaging, cloud-voice service and personalized automation to help you connect with people in real time.",
                imgPath:"data:image/jpeg;base64,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"
            },
            {
                id:5,
                title:"Julia says that she hates children",
                content:"Rather than expect people to answer a cold call or wait days for an email response, real-time communication combines conversational text messaging, cloud-voice service and personalized automation to help you connect with people in real time.",
                imgPath:"https://static.mk.ru/upload/entities/2018/10/09/articles/detailPicture/01/04/36/c1/2509f7852a420c81bf0da45865160c92.jpg"
            },
        ];
    };
}