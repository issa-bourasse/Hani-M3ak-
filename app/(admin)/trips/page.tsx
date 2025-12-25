import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, Filter, Download, MapPin, Clock, DollarSign } from "lucide-react"

export default function TripsPage() {
  const trips = [
    {
      id: "TRP-001",
      rider: "Ahmed Ben Ali",
      driver: "Mohamed Salah",
      pickup: "Downtown, Tunis",
      dropoff: "Airport, Tunis",
      distance: "12.5 km",
      duration: "25 min",
      fare: "$12.50",
      status: "completed",
      time: "2 hours ago"
    },
    {
      id: "TRP-002",
      rider: "Fatima Hassan",
      driver: "Youssef Mansour",
      pickup: "Carthage, Tunis",
      dropoff: "La Marsa, Tunis",
      distance: "8.3 km",
      duration: "18 min",
      fare: "$8.75",
      status: "in_progress",
      time: "Just now"
    },
    {
      id: "TRP-003",
      rider: "Sara Ibrahim",
      driver: "Karim Benzema",
      pickup: "Sousse Center",
      dropoff: "Port El Kantaoui",
      distance: "15.2 km",
      duration: "30 min",
      fare: "$15.20",
      status: "completed",
      time: "5 hours ago"
    },
    {
      id: "TRP-004",
      rider: "Omar Khaled",
      driver: "Rami Malek",
      pickup: "Sfax Downtown",
      dropoff: "Sfax Airport",
      distance: "10.0 km",
      duration: "22 min",
      fare: "$10.00",
      status: "requested",
      time: "1 min ago"
    },
    {
      id: "TRP-005",
      rider: "Leila Mansour",
      driver: "Hassan Ali",
      pickup: "Hammamet Beach",
      dropoff: "Yasmine Hammamet",
      distance: "6.8 km",
      duration: "15 min",
      fare: "$7.50",
      status: "cancelled",
      time: "3 hours ago"
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'gradient-success text-white'
      case 'in_progress':
        return 'bg-accent text-white'
      case 'requested':
        return 'bg-primary text-white'
      case 'cancelled':
        return 'bg-destructive text-white'
      default:
        return ''
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary">Trips</h1>
          <p className="text-muted-foreground mt-1">Manage and monitor all ride requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gradient-primary text-white gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Distance
            </CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52.8 km</div>
            <p className="text-xs text-muted-foreground mt-1">Across all trips today</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Duration
            </CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22 min</div>
            <p className="text-xs text-muted-foreground mt-1">Average trip time</p>
          </CardContent>
        </Card>

        <Card className="glass-light dark:glass">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$53.95</div>
            <p className="text-xs text-muted-foreground mt-1">From completed trips</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by trip ID, rider, or driver..."
            className="pl-10 glass-light dark:glass"
          />
        </div>
      </div>

      {/* Trips Table */}
      <Card className="glass-light dark:glass animate-slide-up">
        <CardHeader>
          <CardTitle>All Trips</CardTitle>
          <CardDescription>Complete list of ride requests and completions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trip ID</TableHead>
                <TableHead>Rider</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id} className="hover:bg-accent/50 transition-colors">
                  <TableCell className="font-medium">{trip.id}</TableCell>
                  <TableCell>{trip.rider}</TableCell>
                  <TableCell>{trip.driver}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm">{trip.pickup}</span>
                      <span className="text-xs text-muted-foreground">→ {trip.dropoff}</span>
                    </div>
                  </TableCell>
                  <TableCell>{trip.distance}</TableCell>
                  <TableCell>{trip.duration}</TableCell>
                  <TableCell className="font-semibold">{trip.fare}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(trip.status)}>
                      {trip.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{trip.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

