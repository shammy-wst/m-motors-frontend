"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dossier } from "@/types";
import { dossiersAPI } from "@/services/api";
import { Table, TableActions, TableSearch } from "@/components/ui/Table";
import { useAuth } from "@/context/AuthContext";

export default function DossiersPage() {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadDossiers = useCallback(async () => {
    try {
      const response = await (isAdmin
        ? dossiersAPI.list()
        : dossiersAPI.myDossiers());
      setDossiers(response.data.data);
    } catch (error) {
      console.error("Error loading dossiers:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    loadDossiers();
  }, [loadDossiers]);

  const filteredDossiers = dossiers.filter(
    (dossier) =>
      dossier.vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
      dossier.vehicle.model.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: Dossier["status"]) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "IN_PROGRESS":
        return "bg-blue-100 text-blue-800";
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: Dossier["status"]) => {
    switch (status) {
      case "PENDING":
        return "En attente";
      case "IN_PROGRESS":
        return "En cours";
      case "COMPLETED":
        return "Terminé";
      case "CANCELLED":
        return "Annulé";
      default:
        return status;
    }
  };

  const columns = [
    {
      header: "Véhicule",
      accessor: (dossier: Dossier) =>
        `${dossier.vehicle.brand} ${dossier.vehicle.model}`,
    },
    {
      header: "Type",
      accessor: (dossier: Dossier) => {
        switch (dossier.type) {
          case "PURCHASE":
            return "Achat";
          case "LEASE":
            return "Location";
          case "TEST_DRIVE":
            return "Essai";
          default:
            return dossier.type;
        }
      },
    },
    {
      header: "Date souhaitée",
      accessor: (dossier: Dossier) =>
        new Date(dossier.desiredDate).toLocaleDateString(),
    },
    {
      header: "Statut",
      accessor: (dossier: Dossier) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
            dossier.status
          )}`}
        >
          {getStatusLabel(dossier.status)}
        </span>
      ),
    },
    {
      header: "Date de création",
      accessor: (dossier: Dossier) =>
        new Date(dossier.createdAt).toLocaleDateString(),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900 font-rem">
                {isAdmin ? "Tous les dossiers" : "Mes dossiers"}
              </h1>
            </div>

            <TableActions>
              <TableSearch
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher par marque ou modèle..."
              />
            </TableActions>

            <Table
              columns={columns}
              data={filteredDossiers}
              isLoading={isLoading}
              onRowClick={(dossier) => router.push(`/dossiers/${dossier.id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
